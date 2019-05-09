import axios from "axios";

const commentNumber = document.getElementById("jsCommentNumber");

const delBtn = document.getElementById("js-commentDelete");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const handleRemoveComment = async event => {
  const target = event.target.parentNode;
  console.log(target);
  const commentId = event.target.id;
  console.log(commentId);
  const response = await axios({
    url: `/api/comment/${commentId}/remove`,
    method: "POST"
  });
  if (response.status === 200) {
    target.parentNode.remove();
    decreaseNumber();
  }
};

function init() {
  delBtn.addEventListener("click", handleRemoveComment);
}

init();
