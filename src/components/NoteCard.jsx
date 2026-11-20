import { useState, useContext } from "react";
import { SettingsContext } from "../SettingsContext.js";
function NoteCard({ title, body }) {
  const [expand, setExpanded] = useState(false);
  const { largeText } = useContext(SettingsContext);
  return (
    <div>
      <h3
        className={
          largeText
            ? "pr-8 text-[28px] font-normal break-words"
            : "pr-8 text-[22px] font-normal break-words"
        }
      >
        {title}
      </h3>
      {expand && (
        <p
          className={
            largeText
              ? "mt-3 text-[21px] break-words whitespace-pre-wrap text-[#4d4d4d]"
              : "mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]"
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
    </div>
  );
}

export default NoteCard;
