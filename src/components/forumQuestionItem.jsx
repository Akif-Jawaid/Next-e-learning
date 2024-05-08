import InstructorImg from "../assets/images/instructor-image-course.png";

const ForumQuestionItem = () => {
  return (
    <div className="forumQuestion row m-0 p-0 mt-2 mb-2 ">
      <div className="card p-3">
        <h3 className="m-0 p-0">Let's stay together,people</h3>
        <div className="row m-0 p-0 mt-3">
          <div className="badge-items w-auto rounded-1 ms-0 m-2">
            <p className="m-0 p-0 fw-medium text-secondary">abuse</p>
          </div>
          <div className="badge-items w-auto rounded-1 m-2">
            <p className="m-0 p-0 fw-medium text-secondary">abuse</p>
          </div>
          <div className="badge-items w-auto rounded-1 m-2">
            <p className="m-0 p-0 fw-medium text-secondary">abuse</p>
          </div>
          <div className="badge-items w-auto rounded-1 m-2">
            <p className="m-0 p-0 fw-medium text-secondary">abuse</p>
          </div>
        </div>
        <div className="row m-0 p-0 align-items-center  justify-content-between ">
          <div className="row col-8 m-0 p-0 align-items-center mt-2">
            <i className="bi bi-hand-thumbs-up-fill p-0 m-0 text-secondary w-auto"></i>
            <p className="vote w-auto m-0 p-0 ps-1">1338 Votes </p>
            <i className="bi bi-chat-left-text-fill text-secondary w-auto"></i>
            <p className="vote w-auto m-0 p-0">1144 Answers </p>
          </div>
          <div className="w-auto m-0 p-0 d-flex mt-4 mt-lg-0">
            <div className="d-flex flex-column justify-content-end ">
                <p className="m-0 p-0 text-secondary w-auto">9th jul 2017,4:37 PM</p>
                <p className=" m-0 p-0 text-right w-auto" style={{ color: "#00CBB8" }}>Hibbanur-Rahman</p>
            </div>
            <div
              className=" rounded-circle overflow-hidden w-auto m-0 p-0 ms-2"
              style={{ backgroundColor: "#D9D9D9" }}
            >
              <img
                src={InstructorImg}
                alt="instructor image"
                className="instructorImg h-100 rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForumQuestionItem;
