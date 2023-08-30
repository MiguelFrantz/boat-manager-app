interface Props {
  total?: number
}

const TotalBoats = ({ total }: Props) => {
  if (!total) {
    return null;
  }

  const message = total === 1 ? "boat" : "boats"

  return <p>{total} {message}</p>
}

export { TotalBoats }