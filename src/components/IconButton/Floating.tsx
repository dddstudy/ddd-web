interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
}

export default function IconButton({ icon, ...restProps }: Props) {
  return (
    <button className={`rounded-[99px] p-16 min-h-56 min-w-56 bg-primary-normal shadow-strong`} {...restProps}>
      {icon}
    </button>
  )
}
