interface Props {
  children: string;
  color?: 'primary' | 'danger' | 'secondary';
  onClick: () => void;
}

function Button({children, onClick, color = 'primary'}: Props) {
  return <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
}

export default Button;