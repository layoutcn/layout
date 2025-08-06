"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Zap, Edit3 } from "lucide-react";

export type Props = {
  flipped: boolean;
  toggleFlip: () => void;
};

export function FlipCard({ flipped, toggleFlip }: Props) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
      <div
        className={`transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {!flipped ? (
          <div>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>Click to see the details</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button onClick={toggleFlip} variant="outline" className="w-full">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </div>
        ) : (
          <div>
            <CardHeader>
              <CardTitle className="text-lg">Performance Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Load Time</span>
                <span className="font-medium">0.8s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Response Time</span>
                <span className="font-medium">120ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Uptime</span>
                <span className="font-medium">99.9%</span>
              </div>
              <Button
                onClick={toggleFlip}
                variant="ghost"
                size="sm"
                className="w-full mt-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            </CardContent>
          </div>
        )}
      </div>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Edit3 className="w-4 h-4" />
      </Button>
    </Card>
  );
}
