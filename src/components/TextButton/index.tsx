interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 's' | 'm' | 'l'
  variant?: 'fill' | 'outline' | 'text'
  label: React.ReactNode
}

const sizeClassName = {
  s:'px-16 py-8 text-body-3-medium',
  m:'px-28 py-12 text-body-2-medium',
  l:'px-32 py-16 text-body-1-medium',
}

const variantClassName = {
  text: 'text-text-primary',
  outline:
    'rounded-full border-[1px] border-solid border-black disabled:border-gray-20 active:bg-button-enabled active:text-white active:border-none',
  fill: 'rounded-full text-white bg-button-enabled disabled:bg-blue-20',
}

export default function TextButton({
  size = 's',
  label,
  variant = 'fill',
  ...restProps
}: Props) {
  return (
    <button
      className={`flex justify-center items-center ${sizeClassName[size]} ${variantClassName[variant]}`}
      {...restProps}
    >
      {label}
    </button>
  )
}
