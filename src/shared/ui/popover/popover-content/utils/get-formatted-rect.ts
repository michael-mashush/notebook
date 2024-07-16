export type GetFormattedRectResult = {
  height:     number;
  width:      number;
  halfHeight: number;
  halfWidth:  number;
  top:        number;
  left:       number;
  right:      number;
  bottom:     number;
};

export function getFormattedRect(rect: DOMRect): GetFormattedRectResult {

  return {
    height:     rect.height,
    width:      rect.width,
    halfHeight: rect.height / 2,
    halfWidth:  rect.width / 2,
    top:        rect.top,
    left:       rect.left,
    right:      document.documentElement.clientWidth - rect.right,
    bottom:     document.documentElement.clientHeight - rect.bottom
  };

}