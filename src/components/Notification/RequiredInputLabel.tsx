export default function RequiredInputLabel({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"label">) {
  return (
    <div className="flex gap-0">
      <label {...props}>{children}</label>
      <div className="w-[4px] h-[4px] rounded-[50%] bg-red-50 mt-[5px] ml-[2px]" />
    </div>
  );
}
