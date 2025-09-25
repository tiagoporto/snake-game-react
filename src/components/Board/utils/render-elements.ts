import type { ELEMENTS_ARRAY } from '../const'
import { CELL_SIZE } from '../const'

export const renderElements = (
  context: CanvasRenderingContext2D,
  elements: ELEMENTS_ARRAY,
  color: string,
) => {
  elements.forEach((element) => {
    context.fillStyle = color
    context?.fillRect(element.x, element.y, CELL_SIZE, CELL_SIZE)
  })
}
