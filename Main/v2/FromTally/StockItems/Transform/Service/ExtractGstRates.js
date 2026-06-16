const ExtractGstRates = (element) => {
    let sgstRate = 0;
    let cgstRate = 0;

    const gstDetails = element.gstdetails?.at(-1);

    if (!gstDetails) {
        return { sgstRate, cgstRate };
    }

    const rateDetails =
        gstDetails?.statewisedetails?.[0]?.ratedetails ?? [];

    const sgst = rateDetails.find(
        ({ gstratedutyhead }) => gstratedutyhead === "SGST/UTGST"
    );

    const cgst = rateDetails.find(
        ({ gstratedutyhead }) => gstratedutyhead === "CGST"
    );

    sgstRate = sgst?.gstrate ?? 0;
    cgstRate = cgst?.gstrate ?? 0;

    return { sgstRate, cgstRate };
};

export default ExtractGstRates;
