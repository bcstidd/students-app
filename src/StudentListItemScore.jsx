export default function StudentListItemScore({ score }) {
  return (
    <div id="person">
      <div className="StudentListItemScore">
        <div>
          {score.date}: {score.score}
        </div>
      </div>
    </div>
  );
}
