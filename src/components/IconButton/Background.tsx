interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
}

export default function BackgroundIconButton({
  icon,
  ...restProps
}: Props) {
  return (
    <button
      className={`rounded-[99px] p-6 min-h-32 min-w-32 disabled:bg-initial disabled:text-label-disabled`}
      {...restProps}
    >
      {icon}
    </button>
  )
}
