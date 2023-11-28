import { extname, resolve } from 'node:path';
import { createWriteStream, existsSync, mkdirSync } from 'node:fs';
import { FastifyInstance } from 'fastify';
import { randomUUID } from 'node:crypto';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const pump = promisify(pipeline);

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880, // 5mb
      },
    });

    if (!upload) {
      return reply.status(400).send();
    }

    const mimetypeRegex = /^(image|video)\/[a-zA-Z]+/;
    const isValidFileFormat = mimetypeRegex.test(upload.mimetype);

    if (!isValidFileFormat) {
      return reply.status(400).send();
    }

    const fileId = randomUUID();
    const extension = extname(upload.filename);
    const fileName = fileId.concat(extension);

    const uploadDirectory = resolve(__dirname, '../../uploads/');

    // Verificar se o diretório existe, e criar se não existir
    if (!existsSync(uploadDirectory)) {
      mkdirSync(uploadDirectory, { recursive: true });
    }

    try {
      const writeStream = createWriteStream(
        resolve(uploadDirectory, fileName),
      );

      await pump(upload.file, writeStream);

      const fullUrl = request.protocol.concat('://').concat(request.hostname);
      const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString();

      return { fileUrl };
    } catch (error) {
      console.error('Erro ao salvar o arquivo:', error);
      return reply.status(500).send({ error: 'Erro interno do servidor' });
    }
  });
}
