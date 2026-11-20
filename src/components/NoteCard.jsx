import { useState, useContext, memo } from 'react'
import { SettingsContext } from "../SettingsContext.js";
function NoteCard({ id, title, body, onDelete }) {
  const [expand, setExpanded] = useState(false);
  const { largeText } = useContext(SettingsContext);
  return (
    <div>
      <h3
        className={
          largeText
            ? "pr-8 text-[28px] font-normal wrap-break-word"
            : "pr-8 text-[22px] font-normal wrap-break-word"
        }
      >
        {title}
      </h3>
      {expand && (
        <p
          className={
            largeText
              ? "mt-3 text-[21px] wrap-break-word whitespace-pre-wrap text-[#4d4d4d]"
              : "mt-3 text-[17px] wrap-break-word whitespace-pre-wrap text-[#4d4d4d]"
          }
        >
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
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-[#949494] hover:text-[#c18585]"
      >
        ×
      </button>
    </div>
  );
}

export default memo(NoteCard);
