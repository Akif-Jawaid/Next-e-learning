import ForumQuestionItem from "../components/forumQuestionItem";

const Forum = () => {
  return (
    <div className="forum m-0 p-0 mt-5 pt-5 d-flex  justify-content-center ">
      <div className="container pt-5">
        <div className="row m-0 p-0">
          <div className="col-8">
            <h2 className="m-0 p-0 col-lg-11" style={{ color: "#2F327D" }}>
              <span className="pe-2" style={{ color: "#00CBB8" }}>
                Q&A
              </span>
              Discussions
            </h2>
            <div className="row m-0 p-0 mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="form-input rounded-pill  col-10"
              />
              <div className="col-2">
                <button className="search btn btn-transparent col-12 rounded-pill">
                  Search
                </button>
              </div>
            </div>
            <div className="row m-0 p-0 mt-5 justify-content-between ">
              <div className="col-4 p-0">
                <select class="form-select" aria-label="Default select example">
                  <option selected>choose the category</option>
                  <option value="1">Trending</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
                <button className="ask-question btn text-light w-auto">
                  Start Learning Now
                </button>

            </div>

            <div className="row m-0 p-0 mt-3">
                <ForumQuestionItem/>
                <ForumQuestionItem/>
                <ForumQuestionItem/>
                <ForumQuestionItem/>
                <ForumQuestionItem/>
                <ForumQuestionItem/>
                <ForumQuestionItem/>
                <ForumQuestionItem/>
                <ForumQuestionItem/>
                <ForumQuestionItem/>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
