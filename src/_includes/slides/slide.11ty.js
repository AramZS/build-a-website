module.exports = function (eleventyObj) {
    let data = eleventyObj.data;
    console.log("slide data", data);
    let image = "";
    let titleTag = "";
    let transition = ""; //data-transition="zoom"
    let backgroundColor = ""; // data-background-color="aquamarine"
    let titleFragment = ""; // class="fragment fade-out"
    let iframeProps = "";
    let extraClass = "";
    if (data.titleAnimation?.length > 0) {
        titleFragment = `class="${data.titleAnimation}"`;
    }
    if (data.bgColor?.length > 0) {
        backgroundColor = `data-background-color="${data.bgColor}"`;
    }
    if (data.transition?.length > 0) {
        transition = `data-transition="${data.transition}"`;
    }
    if (data.image) {
        image = `<img src="${this.url(data.image)}" />`;
    }
    if (data.iframeUrl) {
        iframeProps = `data-background-iframe="${data.iframeUrl}" data-background-interactive`;
    }
    if (data.title) {
        titleTag = `<h2 ${titleFragment}>${data.title}</h2>`;
    }
    if (data.iframeProps?.length > 0) {
        extraClass = `class="iframe-frame"`;
    }
    return `
<section ${extraClass} ${iframeProps} ${transition} ${backgroundColor}>
  ${titleTag}
  ${image}
  ${eleventyObj.content}
</section>
`;
};
