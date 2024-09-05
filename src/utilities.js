export const drawRect = (detections, ctx) => {
  if (!detections || detections.length === 0) {
    console.log("No detections found.");
    return;
  }
  
  // Loop through each prediction
  detections.forEach(prediction => {
    //console.log(prediction);  // Log the prediction to check its structure
    
    // Ensure bbox and class exist
    if (!prediction['bbox'] || !prediction['class']) {
      console.log("Invalid prediction format:", prediction);
      return;
    }

    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // Set styling
    const color = 'green';
    ctx.strokeStyle = color;
    ctx.font = '18px Arial';
    ctx.fillStyle = color;

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillText(text, x, y > 10 ? y - 5 : 10);  // Adjust text position if near top
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
