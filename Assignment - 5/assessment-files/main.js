
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const nameLabel = document.createElement('span');
  const commentLabel = document.createElement('span');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.setAttribute("tabindex", "0");
  commentPara.setAttribute("tabindex", "0");

  nameLabel.textContent = "Author: ";
  commentLabel.textContent = "Comment: ";

  namePara.appendChild(nameLabel);
  commentPara.appendChild(commentLabel);
  
  namePara.innerHTML += nameValue;
  commentPara.innerHTML += commentValue;

  console.log("attr: ", namePara.getAttribute("tabindex"));

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  console.log("namePara: ", namePara);

  nameField.value = '';
  commentField.value = '';
}
  console.log("Script started");

  const transcriptSection = document.querySelector('.transcript');
  const transcriptToggleBtn = document.querySelector('.transcript-container button');

  transcriptToggleBtn.addEventListener('click', () => {
  const isHidden = transcriptToggleBtn.textContent === 'Show transcript';
  transcriptSection.style.height = isHidden ? '150px' : '0';
  transcriptToggleBtn.textContent = isHidden ? 'Hide transcript' : 'Show transcript';
});

  const commentToggleBtn = document.querySelector('.show-hide');

  commentToggleBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.target.click();
  }
});

  const skipLink = document.querySelector('#skip-to-content-link');

  skipLink.addEventListener('focus', () => {
  skipLink.classList.toggle('skip-to-content-link-visible');
});
