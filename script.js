function changeValue(id, delta) {
    let input = document.getElementById(id);
    let newValue = parseInt(input.value) + delta;
    if (newValue >= 0) {
        input.value = newValue;
        calculateScore();
    }
}

function calculateScore() {
    // AUTO Scores
    let autoLeave = document.getElementById('autoLeave').value * 3;
    let autoCoralL1 = document.getElementById('autoCoralL1').value * 3;
    let autoCoralL2 = document.getElementById('autoCoralL2').value * 4;
    let autoCoralL3 = document.getElementById('autoCoralL3').value * 6;
    let autoCoralL4 = document.getElementById('autoCoralL4').value * 7;
    let autoAlgaeProcessor = document.getElementById('autoAlgaeProcessor').value * 6;
    let autoAlgaeNet = document.getElementById('autoAlgaeNet').value * 4;

    // TELEOP Scores
    let teleopCoralL1 = document.getElementById('teleopCoralL1').value * 2;
    let teleopCoralL2 = document.getElementById('teleopCoralL2').value * 3;
    let teleopCoralL3 = document.getElementById('teleopCoralL3').value * 4;
    let teleopCoralL4 = document.getElementById('teleopCoralL4').value * 5;
    let teleopAlgaeProcessor = document.getElementById('teleopAlgaeProcessor').value * 6;
    let teleopAlgaeNet = document.getElementById('teleopAlgaeNet').value * 4;

    // BARGE Scores
    let deepHang = document.getElementById('deepHang').value * 12;
    let shallowHang = document.getElementById('shallowHang').value * 6;
    let teleopParked = document.getElementById('teleopParked').value * 2;

    // Total Score
    let totalScore = autoLeave + autoCoralL1 + autoCoralL2 + autoCoralL3 + autoCoralL4 + autoAlgaeProcessor + autoAlgaeNet +
                     teleopCoralL1 + teleopCoralL2 + teleopCoralL3 + teleopCoralL4 + teleopAlgaeProcessor + teleopAlgaeNet +
                     deepHang + shallowHang + teleopParked;

    document.getElementById('totalScore').textContent = totalScore;
}
