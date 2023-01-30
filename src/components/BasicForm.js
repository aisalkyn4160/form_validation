import { useForm } from 'react-hook-form';

const BasicForm = (props) => {
  const {register, formState: {errors, isValid}, handleSubmit, reset } = useForm({mode: 'all'});
  const onSubmit = (data) =>{
    console.log(data)
    reset()
  } ;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' {...register('firstName', {required: true})}  aria-invalid = {errors.firstName ? 'true' : 'false'}/>
          {errors.firstName?.type === 'required' && <p className='error-text'>First name is required</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' {...register('lastName', {required: true})} aria-invalid = {errors.lastName ? 'true' : 'false'}/>
          {errors.lastName?.type === 'requires' && <p className='error-text'>Last name is required</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' {...register('email', {required: 'Mail is required'})} aria-invalid = {errors.email? 'true' : 'false'}/>
        {errors.email && <p className='error-text'>{errors.mail?.message}</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

