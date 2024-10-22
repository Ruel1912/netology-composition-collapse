import { FC, ReactNode, useState } from 'react'

interface CollapseProps {
  collapsedLabel?: string
  expandedLabel?: string
  isOpen? : boolean;
  children?: ReactNode
}

const Collapse: FC<CollapseProps> = ({
  collapsedLabel = 'Развернуть',
  expandedLabel = 'Свернуть',
  isOpen = false,
  children,
}) => {
  const [openCollapse, setOpenCollapse] = useState(isOpen)

  const handleChange = () => setOpenCollapse(!openCollapse)

  return (
    <div className="collapse max-w-[400px] mx-auto bg-base-200">
      <input type="checkbox" checked={openCollapse} onChange={handleChange} />
      <div className="collapse-title text-xl font-medium">
        {openCollapse ? expandedLabel : collapsedLabel}
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  )
}

export default Collapse
