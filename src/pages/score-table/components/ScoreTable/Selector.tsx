import classNames from 'classnames'

interface Props {
  className?: string
  options: Option[]
  onOptionChange?: (option: Option) => any
  value: number
}

interface Option {
  label: string
  value: number
}

const Selector: React.FC<Props> = (props) => (
  <div
    className={classNames(
      props.className,
      'grid-cols-auto grid w-full grid-flow-col border border-black'
    )}
  >
    {props.options.map((option) => (
      <button
        className={classNames('h-8 px-2 text-xs sm:text-sm', {
          'bg-gray-400': option.value === props.value,
        })}
        onClick={() => props.onOptionChange?.(option)}
      >
        {option.label}
      </button>
    ))}
  </div>
)

export default Selector
