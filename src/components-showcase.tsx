"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  Shield,
  Rocket,
  Heart,
  Zap,
  Globe,
  Users,
  TrendingUp,
  DollarSign,
  Download,
  Eye,
  Clock,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Award,
  Smartphone,
  Lock,
  Headphones,
  Code,
  Copy,
  Edit3,
} from "lucide-react"

const componentTypes = [
  {
    id: "card-icon-text",
    name: "Card + Icon + Text",
    description: "Basic feature card with icon, title, and description",
    components: ["Card", "CardHeader", "CardContent", "Icon", "Typography"],
  },
  {
    id: "feature-card",
    name: "Feature Card",
    description: "Enhanced card with badge, CTA, and additional elements",
    components: ["Card", "Badge", "Button", "Icon", "Typography", "Separator"],
  },
  {
    id: "stats-card",
    name: "Statistics Card",
    description: "Card displaying metrics, progress, and data visualization",
    components: ["Card", "Progress", "Badge", "Typography", "Trend Icons"],
  },
]

export default function ComponentsShowcase() {
  const [selectedType, setSelectedType] = useState("card-icon-text")

  const renderCardIconText = () => {
    const examples = [
      {
        icon: Star,
        title: "Premium Quality",
        description:
          "High-quality materials and craftsmanship in every product we deliver to ensure customer satisfaction.",
        variant: "default",
      },
      {
        icon: Shield,
        title: "Secure & Protected",
        description: "Enterprise-grade security measures to keep your data safe and protected at all times.",
        variant: "outline",
      },
      {
        icon: Rocket,
        title: "Lightning Fast",
        description: "Optimized performance and speed to deliver the best user experience possible.",
        variant: "secondary",
      },
      {
        icon: Heart,
        title: "Customer Focused",
        description: "Dedicated support team available 24/7 to help you with any questions or concerns.",
        variant: "default",
      },
      {
        icon: Globe,
        title: "Global Reach",
        description: "Serving customers worldwide with localized support and international shipping options.",
        variant: "outline",
      },
      {
        icon: Zap,
        title: "Instant Setup",
        description: "Get started in minutes with our streamlined onboarding process and intuitive interface.",
        variant: "secondary",
      },
    ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-200 relative">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <example.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold">{example.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-sm leading-relaxed">{example.description}</CardDescription>
            </CardContent>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    )
  }

  const renderFeatureCard = () => {
    const examples = [
      {
        icon: Target,
        title: "Advanced Analytics",
        description: "Get detailed insights into your business performance with our comprehensive analytics dashboard.",
        badge: "Popular",
        badgeVariant: "default" as const,
        ctaText: "Learn More",
        ctaVariant: "default" as const,
        features: ["Real-time data", "Custom reports", "Export options"],
      },
      {
        icon: Award,
        title: "Premium Support",
        description: "24/7 dedicated support from our expert team to help you succeed with priority assistance.",
        badge: "Pro",
        badgeVariant: "secondary" as const,
        ctaText: "Upgrade Now",
        ctaVariant: "default" as const,
        features: ["Priority queue", "Phone support", "Dedicated manager"],
      },
      {
        icon: Smartphone,
        title: "Mobile Optimized",
        description: "Fully responsive design that works perfectly on all devices and screen sizes.",
        badge: "New",
        badgeVariant: "destructive" as const,
        ctaText: "Try Demo",
        ctaVariant: "outline" as const,
        features: ["iOS & Android", "Progressive Web App", "Offline mode"],
      },
      {
        icon: Lock,
        title: "Enterprise Security",
        description: "Bank-level security with end-to-end encryption and compliance certifications.",
        badge: "Certified",
        badgeVariant: "outline" as const,
        ctaText: "View Details",
        ctaVariant: "ghost" as const,
        features: ["SOC 2 compliant", "GDPR ready", "256-bit encryption"],
      },
      {
        icon: Headphones,
        title: "Expert Consultation",
        description: "One-on-one sessions with industry experts to optimize your workflow and strategy.",
        badge: "Limited",
        badgeVariant: "secondary" as const,
        ctaText: "Book Session",
        ctaVariant: "default" as const,
        features: ["1-hour sessions", "Custom strategy", "Follow-up support"],
      },
      {
        icon: Code,
        title: "Developer Tools",
        description: "Comprehensive API and SDK for seamless integration with your existing systems.",
        badge: "Beta",
        badgeVariant: "outline" as const,
        ctaText: "Access API",
        ctaVariant: "outline" as const,
        features: ["REST API", "GraphQL", "Webhooks"],
      },
    ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-200 relative">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <example.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant={example.badgeVariant}>{example.badge}</Badge>
              </div>
              <CardTitle className="text-lg font-semibold">{example.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-sm leading-relaxed">{example.description}</CardDescription>

              <Separator />

              <div className="space-y-2">
                {example.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button variant={example.ctaVariant} className="w-full mt-4">
                {example.ctaText}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    )
  }

  const renderStatsCard = () => {
    const examples = [
      {
        title: "Total Revenue",
        value: "$124,563",
        change: "+12.5%",
        trend: "up",
        icon: DollarSign,
        progress: 75,
        period: "vs last month",
        color: "text-green-600",
        bgColor: "bg-green-50",
      },
      {
        title: "Active Users",
        value: "8,429",
        change: "+8.2%",
        trend: "up",
        icon: Users,
        progress: 68,
        period: "vs last month",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        title: "Conversion Rate",
        value: "3.24%",
        change: "-2.1%",
        trend: "down",
        icon: TrendingUp,
        progress: 45,
        period: "vs last month",
        color: "text-red-600",
        bgColor: "bg-red-50",
      },
      {
        title: "Page Views",
        value: "45,231",
        change: "+15.3%",
        trend: "up",
        icon: Eye,
        progress: 82,
        period: "vs last month",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
      },
      {
        title: "Downloads",
        value: "2,847",
        change: "+5.7%",
        trend: "up",
        icon: Download,
        progress: 58,
        period: "vs last month",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
      },
      {
        title: "Response Time",
        value: "1.2s",
        change: "-0.3s",
        trend: "up",
        icon: Clock,
        progress: 90,
        period: "vs last month",
        color: "text-green-600",
        bgColor: "bg-green-50",
      },
    ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-200 relative">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 ${example.bgColor} rounded-lg flex items-center justify-center`}>
                  <example.icon className={`w-6 h-6 ${example.color}`} />
                </div>
                <Badge variant="outline" className="text-xs">
                  {example.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <CardTitle className="text-2xl font-bold">{example.value}</CardTitle>
                  <div className={`flex items-center gap-1 text-sm font-medium ${example.color}`}>
                    {example.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {example.change}
                  </div>
                </div>
                <CardDescription className="text-sm font-medium">{example.title}</CardDescription>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{example.progress}%</span>
                </div>
                <Progress value={example.progress} className="h-2" />
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Target: 100%</span>
                  <span>{100 - example.progress}% remaining</span>
                </div>
              </div>
            </CardContent>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    )
  }

  const renderContent = () => {
    switch (selectedType) {
      case "card-icon-text":
        return renderCardIconText()
      case "feature-card":
        return renderFeatureCard()
      case "stats-card":
        return renderStatsCard()
      default:
        return renderCardIconText()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Shadcn Component Library</h1>
              <p className="text-muted-foreground mt-2">
                Predefined component combinations for your feature grid builder
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy All
              </Button>
              <Button size="sm">
                <Code className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Component Type Selector */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {componentTypes.map((type) => (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedType === type.id ? "ring-2 ring-primary shadow-lg" : ""
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {type.components.map((component) => (
                      <Badge key={component} variant="secondary" className="text-xs">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Component Examples */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                {componentTypes.find((t) => t.id === selectedType)?.name} Examples
              </h2>
              <p className="text-muted-foreground">Click the edit icon on any card to customize its content</p>
            </div>
            <Badge variant="outline" className="text-sm">
              {selectedType === "card-icon-text" && "6 variations"}
              {selectedType === "feature-card" && "6 variations"}
              {selectedType === "stats-card" && "6 variations"}
            </Badge>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">{renderContent()}</div>
        </div>

        {/* Component Breakdown */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Component Breakdown</CardTitle>
              <CardDescription>
                Shadcn/ui components used in {componentTypes.find((t) => t.id === selectedType)?.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {componentTypes
                  .find((t) => t.id === selectedType)
                  ?.components.map((component) => (
                    <div key={component} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                        <Code className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-sm">{component}</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
