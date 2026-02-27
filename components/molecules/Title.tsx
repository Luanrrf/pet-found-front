export default function Title({ text }: { text: string }) {
  return (
    <div>
      <h1
        className="m-0 text-[#333] font-inter text-[32px] font-bold leading-normal"
        style={{ margin: '0 0 22px' }}
      >
        {text}
      </h1>
    </div>
  )
}
