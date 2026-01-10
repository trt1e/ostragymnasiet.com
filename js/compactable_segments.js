function press_segment(number) { // number determins wich segment opens/closes
    let removableSegments = document.getElementsByClassName("compactable_segment_main"); 
    let segmentIcons = document.getElementsByClassName("compactable_segment_icon");
    let specificRemovableSegments = removableSegments[number];
    let specificSegmentIcons = segmentIcons[number];
    
    if (specificRemovableSegments.style.display === "block") {
        specificRemovableSegments.style.display = "none";
        specificSegmentIcons.src = "../images/UI/plus.svg";
    } else {
        specificRemovableSegments.style.display = "block";
        specificSegmentIcons.src = "../images/UI/minus.svg";
    };
};