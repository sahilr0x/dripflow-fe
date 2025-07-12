"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Clock, Zap, CheckCircle } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const SavingsSection = () => {
  const [newslettersPerMonth, setNewslettersPerMonth] = useState(4);

  // Calculate savings based on newsletters per month
  const manualCostPerNewsletter = 125;
  const proPlanMonthlyCost = 99.99;
  const monthlySavings =
    newslettersPerMonth * manualCostPerNewsletter - proPlanMonthlyCost;
  const yearlyInvestmentReturn = monthlySavings * 12;
  const threeYearReturn = monthlySavings * 36;

  // Generate chart data for investment return over time
  const generateChartData = () => {
    const data = [];
    for (let i = 0; i <= 36; i++) {
      data.push({
        month:
          i === 0
            ? "1mo"
            : i === 6
            ? "6mo"
            : i === 12
            ? "1yr"
            : i === 24
            ? "2yr"
            : i === 36
            ? "3yr"
            : "",
        value: i * monthlySavings,
        displayMonth: i,
      });
    }
    return data;
  };

  const chartData = generateChartData();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Save 75-80% on Newsletter Costs
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stop Spending Hours on Newsletters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manual newsletter creation costs $125+ per newsletter. Our AI
            automation saves you time and money while delivering professional
            results.
          </p>
        </div>

        {/* Calculator Section */}
        <Card className="mb-12 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                See How Much You'll Save
              </h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Manual newsletter creation costs an average of $125 per newsletter
              (4 hours × $31.25/hour). Calculate your savings with Dripflow's AI
              automation.
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-medium">
                  Newsletters per month
                </span>
                <span className="text-3xl font-bold text-blue-600">
                  {newslettersPerMonth}
                </span>
              </div>
              <Slider
                value={[newslettersPerMonth]}
                onValueChange={(value) => setNewslettersPerMonth(value[0])}
                max={30}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1</span>
                <span>15</span>
                <span>30+</span>
              </div>
            </div>

            {/* Investment Return Chart */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="text-xl font-semibold text-gray-900">
                  Investment Return Over Time
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Watch your savings grow month by month - Dripflow pays for
                itself and keeps delivering value
              </p>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="savingsGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#10b981"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#10b981"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={3}
                      fill="url(#savingsGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Cumulative Savings with Dripflow • Based on{" "}
                  {newslettersPerMonth} newsletters/month • $
                  {monthlySavings.toFixed(2)}/month saved
                </span>
              </div>
            </div>

            {/* 3-Year Investment Return Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 text-center mb-8">
              <div className="text-green-600 text-sm font-medium mb-2">
                💰 3-Year Investment Return
              </div>
              <div className="text-4xl font-bold text-green-700 mb-2">
                ${threeYearReturn.toLocaleString()}
              </div>
              <div className="text-green-600">
                That's enough to hire a full-time employee for 3+ months!
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Manual Process */}
          <Card className="relative bg-red-50 border-red-200">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-red-600" />
                <span className="text-red-800 font-semibold">
                  Manual Process
                </span>
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">$500</div>
              <div className="text-red-700">
                {newslettersPerMonth} × $125 per newsletter
              </div>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-semibold">Pro Plan</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                $99.99
              </div>
              <div className="text-blue-700">per month</div>
            </CardContent>
          </Card>

          {/* You Save */}
          <Card className="relative bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-semibold">You Save</span>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                ${monthlySavings.toFixed(2)}
              </div>
              <div className="text-green-700">
                {Math.round(
                  (monthlySavings /
                    (newslettersPerMonth * manualCostPerNewsletter)) *
                    100
                )}
                % savings per month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Plan CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6" />
              <span className="text-xl font-semibold">
                Recommended: Pro Plan
              </span>
            </div>
            <p className="text-lg opacity-90">
              Based on {newslettersPerMonth} newsletters per month, you'll save{" "}
              <span className="font-bold text-yellow-300">
                ${monthlySavings.toFixed(2)}
              </span>{" "}
              monthly with our Pro plan!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SavingsSection;
