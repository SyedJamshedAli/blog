import Link from "next/link"
import getFormattedDate from "../lib/getFormattedDate"

type Props = {
    post:BlogPost
}

export default function PostsList({post}: Props) {
    const {id,title,date}=post 
    const formatedDate=getFormattedDate(date); 
  return (
    <li className="mt-4 text-2xl">
            <Link className="underline hover:text-black/70" href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formatedDate}</p>
        </li>
  )
}