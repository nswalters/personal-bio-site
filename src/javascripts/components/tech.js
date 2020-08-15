const techCardMaker = (tech) => {
  const domString = `
    <div class="card techCard col-3 m-2">
      <img class="card-img-top mx-auto" src="${tech.imageURL}" alt="card image cap">
      <div class="card-body">
        <h5 class="card-title">${tech.name}</h5>
      </div>
    </div>
  `;

  return domString;
};

export default {
  techCardMaker,
};
