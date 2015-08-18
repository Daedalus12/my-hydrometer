/**
 * Created by meessg on 2015.08.17.
 */
function calculateAdjustedGravity(mg, tr, tc, offset){
    return (mg-offset)*((1.00130346 - 0.000134722124 * tr + 0.00000204052596 *
        Math.pow(tr,2) - 0.00000000232820948 * Math.pow(tr,3)) /
        (1.00130346 - 0.000134722124 * tc + 0.00000204052596 * Math.pow(tc,2) -
        0.00000000232820948 * Math.pow(tc,3)));
}

function updateAllFromNumeric(){
    var hydrometerReading = $("#readingNumericID").val();
    var temperature = $("#tempNumericID").val();
    var calibrationOffset = $("#offsetNumericID").val();
    var calibrationTemp = $("#calibrationTemperature").val();

    $("#readingSliderID").val(hydrometerReading);
    $("#tempSliderID").val(temperature);
    $("#offsetSliderID").val(calibrationOffset);

    var mg = hydrometerReading;
    var tr = temperature;
    var tc = calibrationTemp;
    var offset = calibrationOffset;

    var result = calculateAdjustedGravity(
        hydrometerReading, temperature, calibrationTemp, calibrationOffset);
    $("#adjustedGravity").text(result.toFixed(3));
}

function updateAllFromSlider(){
    var hydrometerReading = $("#readingSliderID").val();
    var temperature = $("#tempSliderID").val();
    var calibrationOffset = $("#offsetSliderID").val();
    var calibrationTemp = $("#calibrationTemperature").val();

    $("#readingNumericID").val(hydrometerReading);
    $("#tempNumericID").val(temperature);
    $("#offsetNumericID").val(calibrationOffset);

    var result = calculateAdjustedGravity(
        hydrometerReading, temperature, calibrationTemp, calibrationOffset);
    $("#adjustedGravity").text(result.toFixed(3));
}