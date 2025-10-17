function compareBrands() {
    // Get the selected brands
    var brand1 = document.getElementById("brand1").value;
    var brand2 = document.getElementById("brand2").value;

    // Define comparison data for each brand
    const comparisonData = {
        Adidas: {
            price: 'High',
            quality: 'High',
            design: 'Sporty',
            reliability: 'Very Reliable'
        },
        ASOS: {
            price: 'Medium',
            quality: 'Medium',
            design: 'Trendy',
            reliability: 'Moderate'
        },
        Zara: {
            price: 'Medium',
            quality: 'High',
            design: 'Chic',
            reliability: 'High'
        },
        Mango: {
            price: 'Medium',
            quality: 'Medium',
            design: 'Classic',
            reliability: 'Moderate'
        },
        Reebok: {
            price: 'Medium',
            quality: 'High',
            design: 'Sporty',
            reliability: 'High'
        },
        Stradivarius: {
            price: 'Low-Medium',
            quality: 'Medium',
            design: 'Fashion-forward',
            reliability: 'Moderate'
        }
    };

    // Get data for each brand based on the selected options
    var brand1Data = comparisonData[brand1];
    var brand2Data = comparisonData[brand2];

    // Fill in comparison table with the selected brand data
    document.getElementById("brand1Price").innerHTML = brand1Data.price;
    document.getElementById("brand2Price").innerHTML = brand2Data.price;
    document.getElementById("brand1Quality").innerHTML = brand1Data.quality;
    document.getElementById("brand2Quality").innerHTML = brand2Data.quality;
    document.getElementById("brand1Design").innerHTML = brand1Data.design;
    document.getElementById("brand2Design").innerHTML = brand2Data.design;
    document.getElementById("brand1Reliability").innerHTML = brand1Data.reliability;
    document.getElementById("brand2Reliability").innerHTML = brand2Data.reliability;

    // Initialize variables for determining the better brand
    let brand1Score = 0;
    let brand2Score = 0;

    // Compare prices (assign numeric values to make the comparison)
    const priceRanking = {
        'Low-Medium': 1,
        'Medium': 2,
        'High': 3,
        'Very Reliable': 4
    };

    // Compare price (lower price is better)
    if (priceRanking[brand1Data.price] < priceRanking[brand2Data.price]) {
        brand1Score++;
    } else if (priceRanking[brand1Data.price] > priceRanking[brand2Data.price]) {
        brand2Score++;
    }

    // Compare quality (higher quality is better)
    const qualityRanking = {
        'Low': 1,
        'Medium': 2,
        'High': 3,
        'Very High': 4
    };

    if (qualityRanking[brand1Data.quality] > qualityRanking[brand2Data.quality]) {
        brand1Score++;
    } else if (qualityRanking[brand1Data.quality] < qualityRanking[brand2Data.quality]) {
        brand2Score++;
    }

    // Compare design (assign numeric values based on subjective criteria)
    const designRanking = {
        'Classic': 1,
        'Trendy': 2,
        'Sporty': 3,
        'Chic': 4,
        'Fashion-forward': 5
    };

    if (designRanking[brand1Data.design] > designRanking[brand2Data.design]) {
        brand1Score++;
    } else if (designRanking[brand1Data.design] < designRanking[brand2Data.design]) {
        brand2Score++;
    }

    // Compare reliability (higher reliability is better)
    const reliabilityRanking = {
        'Low': 1,
        'Moderate': 2,
        'High': 3,
        'Very Reliable': 4
    };

    if (reliabilityRanking[brand1Data.reliability] > reliabilityRanking[brand2Data.reliability]) {
        brand1Score++;
    } else if (reliabilityRanking[brand1Data.reliability] < reliabilityRanking[brand2Data.reliability]) {
        brand2Score++;
    }

    // Get the result table element
    const resultTable = document.getElementById("resultTable");

    // Highlight the better brand by changing the table outline
    if (brand1Score > brand2Score) {
        resultTable.classList.add("better-brand");
        resultTable.classList.remove("better-brand-2");
    } else if (brand2Score > brand1Score) {
        resultTable.classList.add("better-brand-2");
        resultTable.classList.remove("better-brand");
    } else {
        resultTable.classList.remove("better-brand");
        resultTable.classList.remove("better-brand-2");
    }
}
