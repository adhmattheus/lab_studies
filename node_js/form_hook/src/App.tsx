import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import './styles/global.css';
import { z } from 'zod';

const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('O nome é obrigatório')
    .transform(name => {
      return name
        .trim()
        .split(' ')
        .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    }),
  email: z.string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido')
    .toLowerCase()
    .refine(email => {
      return email.endsWith('lafera.com')
    }, 'O e-mail precisar ser do Lafera'),
  password: z.string()
    .min(6, 'A senha precisa de no mínimo 5 caracteres'),
  techs: z.array(z.object({
    title: z.string().nonempty('O título é obrigatório'),
    knowledge: z.coerce.number().min(1).max(100),
  })).min(2, 'Insira pelo menos 2 tecnologias')
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function App() {

  const [output, setOutput] = useState('');

  const { register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'techs'
  });

  function addNewTech() {
    append({ title: '', knowledge: 0 })
  };

  function createUser(data: CreateUserFormData) {
    setOutput(JSON.stringify(data, null, 2))
  };

  return (
    <main className="h-screen bg-zinc-100 text-zinc-800 flex flex-col gap-10 items-center justify-center">
      <form
        onSubmit={handleSubmit(createUser)}
        className='flex flex-col gap-4 w-full max-w-xs'
      >

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            className='border border-emerald-500 text-black shadow-sm rounded h-10 px-3 bg-white '
            {...register('name')}
          />
          {errors.name && <span className='text-red-400 text-xs'>{errors.name.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Email</label>
          <input
            type="email"
            className='border border-emerald-500 text-white  shadow-sm rounded h-10 px-3 bg-white'
            {...register('email')}
          />
          {errors.email && <span className='text-red-400 text-xs'>{errors.email.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            className='border border-emerald-500 text-white shadow-sm rounded  h-10 px-3 bg-white'
            {...register('password')}
          />
          {errors.password && <span className='text-red-400 text-xs'>{errors.password.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="" className='flex items-center justify-between'>
            Tecnologias
            <button className='text-emerald-500 text-smF' onClick={addNewTech}>Adicionar</button>
          </label>

          {fields.map((field, index) => {
            return (
              <div className='flex gap-2' key={field.id}>
                <div className='flex-1 flex flex-col gap-1'>
                  <input
                    type="text"
                    className=' border border-zinc-600  text-white shadow-sm rounded  h-10 px-3 bg-zinc-800 '
                    {...register(`techs.${index}.title`)}
                  />

                  {errors.techs?.[index]?.title && <span className='text-red-400 text-xs'>{errors.techs?.[index]?.title?.message}</span>}
                </div>

                <div className='flex flex-col gap-1'>
                  <input
                    type="number"
                    className=' w-12 border border-zinc-600  text-white shadow-sm rounded  h-10 px-3 bg-zinc-800 '
                    {...register(`techs.${index}.knowledge`)}
                  />
                  {errors.techs?.[index]?.knowledge && <span>{errors.techs?.[index]?.knowledge?.message}</span>}
                </div>
              </div>
            )
          })}
          {errors.techs && <span className='text-red-400 text-xs'>{errors.techs.message}</span>}
        </div>

        <button
          type='submit'
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
        >Salvar</button>

      </form>

      <pre>{output}</pre>

    </main>
  )
}