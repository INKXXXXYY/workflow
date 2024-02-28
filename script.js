function search() {
    var input = document.getElementById('search');
    window.open('https://www.google.com/search?q=' + encodeURIComponent(input.value));
}

document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();  // 调用上面定义的 search 函数
    }
});

// Function to show an input prompt for the new tag
function promptForNewTag(sectionId) {
  const tagName = prompt('请输入新标签的名称:');
  if (tagName) {
    addTag(tagName, sectionId);
  }
}

// Function to add a new tag
function addTag(tagName, sectionId) {
  // Find the section where the new tag will be added
  const section = document.getElementById(sectionId);
  if (section) {
    // Create the new tag element
    const newTag = document.createElement('div');
    newTag.className = 'link';
    newTag.textContent = tagName;
    section.appendChild(newTag);
  }
}

// Event listeners for adding new tag buttons
document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', function() {
    const sectionId = this.dataset.section; // Assuming button has data-section attribute
    promptForNewTag(sectionId);
  });
});

// You can add more general event listeners or functions here as needed
