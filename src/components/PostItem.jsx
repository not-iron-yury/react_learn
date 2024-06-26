import { Button } from "./UI/buttons/Button"

export function PostItem({data, remove}) {
  return (
    <li className="posts__item post">
      <div className="post__content">
        <h2 className="post__title">{data.id}. {data.title}</h2>
        <p className="post__descr">{data.body}</p>
      </div>
      <Button onClick={() => remove(data)}>Удалить</Button>
    </li>
  )
}