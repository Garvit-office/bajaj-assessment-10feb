function handleFibonacci(n) {
    if (!Number.isInteger(n) || n < 0) return [];
    const series = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        series.push(a);
        [a, b] = [b, a + b];
    }
    return series;
}

function handlePrime(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.filter(isPrime);
}

function isPrime(num) {
    if (typeof num !== 'number' || num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function handleLCM(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.reduce((a, b) => lcm(a, b));
}

function lcm(a, b) {
    return Math.abs(a * b) / hcf(a, b);
}

function handleHCF(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.reduce((a, b) => hcf(a, b));
}

function hcf(a, b) {
    if (b === 0) return a;
    return hcf(b, a % b);
}

const axios = require('axios');
async function handleAI(question) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return "AI API key missing";
    try {
        const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
            {
                contents: [{ parts: [{ text: question }] }]
            },
            {
                headers: { 'x-goog-api-key': apiKey }
            }
        );
        let answer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "AI error";
        answer = answer.split(/[\s,.!?]/)[0];
        return answer;
    } catch (err) {
        return "AI error";
    }
}

module.exports = {
    handleFibonacci,
    handlePrime,
    handleLCM,
    handleHCF,
    handleAI
};
