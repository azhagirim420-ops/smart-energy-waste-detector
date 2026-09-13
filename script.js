function detectWaste() {

    const appliance =
        document.getElementById("appliance").value;

    const power =
        Number(document.getElementById("power").value);

    const hours =
        Number(document.getElementById("hours").value);

    const days =
        Number(document.getElementById("days").value);

    const rate =
        Number(document.getElementById("rate").value);

    // Check input
    if (
        appliance === "" ||
        power <= 0 ||
        hours <= 0 ||
        days <= 0 ||
        rate <= 0
    ) {
        alert("Please enter valid information.");
        return;
    }

    // Energy calculation
    // Watts → kW → kWh
    const energy =
        (power / 1000) * hours * days;

    // Cost calculation
    const cost =
        energy * rate;

    let status;
    let recommendation;

    // Simple waste detection
    if (hours <= 4) {

        status = "NORMAL ✅";

        recommendation =
            "Your appliance usage is relatively low. Continue monitoring your energy consumption.";

    } else if (hours <= 8) {

        status = "MODERATE ⚠️";

        recommendation =
            "Try reducing the daily usage time. Switching the appliance off when not required can save energy.";

    } else {

        status = "HIGH WASTE 🚨";

        recommendation =
            "Your appliance is being used for many hours. Reduce unnecessary usage and switch it off when not needed.";
    }

    // Display results
    document.getElementById("resultAppliance").innerText =
        appliance;

    document.getElementById("energy").innerText =
        energy.toFixed(2) + " kWh";

    document.getElementById("cost").innerText =
        "₹" + cost.toFixed(2);

    document.getElementById("status").innerText =
        status;

    document.getElementById("suggestionText").innerText =
        recommendation;

    document.getElementById("result")
        .classList.remove("hidden");

    // Scroll to result
    document.getElementById("result")
        .scrollIntoView({
            behavior: "smooth"
        });
}
