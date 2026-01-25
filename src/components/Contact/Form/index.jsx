import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { FormField } from './FormField';

export function Form() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          from_name: data.name,
          email: data.email,
          reply_to: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(t('contato.sucesso'));
      reset();
    } catch {
      toast.error(t('contato.erro'));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 dark:bg-neutral-800 rounded-xl p-8 w-full max-w-lg space-y-4"
    >
      <FormField error={errors.name?.message}>
        <input
          placeholder="Nome"
          className="input"
          {...register('name', {
            setValueAs: (v) => v.trim(),
            required: t('contato.erros.obrigatorio'),
            minLength: {
              value: 2,
              message: t('contato.erros.minLength'),
            },
            maxLength: {
              value: 100,
              message: t('contato.erros.maxLength'),
            },
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
              message: t('contato.erros.letrasSomente'),
            },
          })}
        />
      </FormField>

      <FormField error={errors.email?.message}>
        <input
          placeholder="Email"
          className="input"
          {...register('email', {
            setValueAs: (v) => v.trim(),
            required: t('contato.erros.obrigatorio'),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t('contato.erros.pattern'),
            },
          })}
        />
      </FormField>

      <FormField error={errors.message?.message}>
        <textarea
          placeholder="Mensagem..."
          className="input min-h-20 max-h-64"
          {...register('message', {
            setValueAs: (v) => v.trim(),
            required: t('contato.erros.obrigatorio'),
            minLength: {
              value: 10,
              message: t('contato.erros.minLength'),
            },
            maxLength: {
              value: 500,
              message: t('contato.erros.maxLength'),
            },
          })}
        />
      </FormField>

      <p className="text-xs text-gray-500 dark:text-gray-300">
        Obs.: {t('contato.formulario')}
      </p>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-base w-20 h-8 px-4 py-1 mt-4 disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 mx-auto border-2 border-white border-t-pink rounded-full animate-spin" />
          ) : (
            t('contato.enviar')
          )}
        </button>
      </div>
    </form>
  );
}
