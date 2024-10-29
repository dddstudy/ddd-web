import ErrorIcon from '@/components/svgs/ErrorIcon'

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 's' | 'l'
  iserror?: boolean
  errorMessage?: string
}

const sizeClassNames = {
  s: {
    input: 'px-20 py-14 text-body-3-medium',
    errorIcon: 'right-20',
  },
  l: {
    input: 'px-24 py-16 text-body-1-medium',
    errorIcon: 'right-24',
  },
}

export default function TextInput({
  size = 's',
  iserror,
  errorMessage = 'alert',
  ...restProps
}: Props) {
  const errorClassName = size === 's' ? 'pr-[44px]' : 'pr-[48px]'
  return (
    <>
      <div className="relative">
        <input
          type="text"
          className={`relative ${
            sizeClassNames[size].input
          } rounded-[99px] border-[1.5px] border-solid border-gray-30 focus:border-blue-40 ${
            iserror && `border-red-40 ${errorClassName}`
          } ${restProps.disabled && `border-gray-20 bg-gray-10 text-gray-30`}`}
          {...restProps}
        />
        {iserror && (
          <ErrorIcon
            className={`absolute ${sizeClassNames[size].errorIcon} top-[50%] translate-y-[-50%]`}
          />
        )}
      </div>
      {iserror && (
        <p className="mt-4 text-red-40 text-body-3-regular">{errorMessage}</p>
      )}
    </>
  )
}
