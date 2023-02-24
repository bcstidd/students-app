// import StudentListItemScore from "./StudentListItemScore";

export default function StudentListItem({ student }) {
  return (
    <div className="StudentListItem">
      <u>
        <strong>
          <div>{student.name}</div>
        </strong>
      </u>
      <div className="lorem">{student.bio}</div>

      <ul className="score">
        {student.scores.map((score) => (
          <li key={score.date}>
            {score.date}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
