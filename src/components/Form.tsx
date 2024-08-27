import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, { message: 'name must be atleast 2 charaters' }),
  age: z
    .number({ invalid_type_error: 'age field is required' })
    .min(0, { message: 'age can not be negative' })
    .max(125, {message: 'there is no way you are older then the oldest human'}),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-lable'>
          Name
        </label>
        <input
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          id='age'
          type='number'
          className='form-control'
        />
        {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
