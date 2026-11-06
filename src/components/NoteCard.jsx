
import { useState } from "react";
function NoteCard({ title, body }) {
    const [expand, setExpanded] = useState(false);
  return (
    <div>
      <h3 className="pr-8 text-[22px] font-normal wrap-break-words">{title}</h3>
        {expand && (
      <p className="mt-3 text-[17px] wrap-break-words whitespace-pre-wrap text-[#4d4d4d]">
        {body}
      </p>
        )}
      <button
        type="button"
        onClick={() => setExpanded(!expand)}
        className="mt-auto cursor-pointer text-xs font-medium text-[#b83f45] hover:underline"
      >
        {expand ? "Show less" : "Show more"}
      </button>
    </div>
  )
}
 
export default NoteCard