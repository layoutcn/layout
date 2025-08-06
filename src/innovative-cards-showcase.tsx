"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  Play,
  Pause,
  ArrowRight,
  ArrowLeft,
  Code2,
  Smartphone,
  Monitor,
  Tablet,
  MapPin,
  MessageCircle,
  Zap,
  Shield,
  Gauge,
  Users,
  Bell,
  Cloud,
  Thermometer,
  CheckCircle,
  Clock,
  Star,
  Edit3,
  Copy,
} from "lucide-react"

const cardCategories = [
  {
    id: "interactive",
    name: "Interactive Cards",
    description: "Cards with dynamic interactions and state changes",
  },
  {
    id: "demo",
    name: "Demo & Preview Cards",
    description: "Cards showing live demos, code, or device mockups",
  },
  {
    id: "data-viz",
    name: "Data Visualization Cards",
    description: "Cards with charts, metrics, and visual data representation",
  },
  {
    id: "social-proof",
    name: "Social Proof Cards",
    description: "Cards showing testimonials, reviews, and user feedback",
  },
  {
    id: "process",
    name: "Process & Journey Cards",
    description: "Cards showing workflows, timelines, and step-by-step processes",
  },
  {
    id: "contextual",
    name: "Contextual Cards",
    description: "Cards with location, time, or environment-specific content",
  },
]

export default function InnovativeCardsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("interactive")
  const [flipStates, setFlipStates] = useState<{ [key: string]: boolean }>({})
  const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>({})
  const [playingDemo, setPlayingDemo] = useState<string | null>(null)

  const toggleFlip = (cardId: string) => {
    setFlipStates((prev) => ({ ...prev, [cardId]: !prev[cardId] }))
  }

  const renderInteractiveCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Flip Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
          <div className={`transition-transform duration-500 ${flipStates["flip1"] ? "rotate-y-180" : ""}`}>
            {!flipStates["flip1"] ? (
              <div>
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>Click to see the details</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button onClick={() => toggleFlip("flip1")} variant="outline" className="w-full">
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
                    <Badge variant="secondary">0.8s</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Response Time</span>
                    <Badge variant="secondary">120ms</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Uptime</span>
                    <Badge variant="secondary">99.9%</Badge>
                  </div>
                  <Button onClick={() => toggleFlip("flip1")} variant="ghost" size="sm" className="w-full mt-4">
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

        {/* Toggle Comparison Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Before vs After</CardTitle>
              <Switch checked={flipStates["toggle1"] || false} onCheckedChange={() => toggleFlip("toggle1")} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div
                  className={`transition-all duration-300 ${flipStates["toggle1"] ? "text-green-600" : "text-red-600"}`}
                >
                  <div className="text-3xl font-bold">{flipStates["toggle1"] ? "2.1s" : "8.7s"}</div>
                  <div className="text-sm text-muted-foreground">
                    {flipStates["toggle1"] ? "After Optimization" : "Before Optimization"}
                  </div>
                </div>
              </div>
              <Progress value={flipStates["toggle1"] ? 85 : 25} className="h-2" />
              <div className="text-center text-sm text-muted-foreground">Page Load Speed</div>
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

        {/* Interactive Slider Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <CardTitle className="text-lg">Pricing Calculator</CardTitle>
            <CardDescription>Adjust to see pricing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Users</span>
                <span className="font-medium">{sliderValues["users"] || 50}</span>
              </div>
              <Slider
                value={[sliderValues["users"] || 50]}
                onValueChange={(value) => setSliderValues((prev) => ({ ...prev, users: value[0] }))}
                max={200}
                min={1}
                step={1}
                className="w-full"
              />
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-2xl font-bold text-primary">${Math.round((sliderValues["users"] || 50) * 0.5)}</div>
              <div className="text-sm text-muted-foreground">per month</div>
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
      </div>
    )
  }

  const renderDemoCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video Demo Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <CardTitle className="text-lg">Product Demo</CardTitle>
            <CardDescription>2 min overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16"
                  onClick={() => setPlayingDemo(playingDemo === "demo1" ? null : "demo1")}
                >
                  {playingDemo === "demo1" ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
              </div>
              {playingDemo === "demo1" && (
                <div className="absolute bottom-4 left-4 right-4">
                  <Progress value={45} className="h-1" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
              <span>Watch full demo</span>
              <Badge variant="outline">HD</Badge>
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

        {/* Code Preview Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              <CardTitle className="text-lg">API Integration</CardTitle>
            </div>
            <CardDescription>Simple implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
              <div className="text-green-400">// Initialize SDK</div>
              <div className="text-blue-400">const</div>
              <div className="text-white"> api = </div>
              <div className="text-yellow-400">new</div>
              <div className="text-purple-400"> SDK</div>
              <div className="text-white">(</div>
              <div className="text-orange-400">'your-key'</div>
              <div className="text-white">)</div>
              <br />
              <div className="text-green-400">// Make request</div>
              <div className="text-white">api.</div>
              <div className="text-blue-400">get</div>
              <div className="text-white">(</div>
              <div className="text-orange-400">'/users'</div>
              <div className="text-white">)</div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge variant="secondary">JavaScript</Badge>
              <Button size="sm" variant="ghost">
                <Copy className="w-4 h-4" />
              </Button>
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

        {/* Device Mockup Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <CardTitle className="text-lg">Multi-Device Support</CardTitle>
            <CardDescription>Works everywhere</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-center gap-2 mb-4">
              <div className="w-8 h-12 bg-gray-800 rounded-sm flex items-end justify-center pb-1">
                <Smartphone className="w-3 h-3 text-white" />
              </div>
              <div className="w-12 h-8 bg-gray-800 rounded-sm flex items-center justify-center">
                <Tablet className="w-4 h-4 text-white" />
              </div>
              <div className="w-16 h-10 bg-gray-800 rounded-sm flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-center">
              <div>
                <div className="font-medium">Mobile</div>
                <div className="text-muted-foreground">iOS & Android</div>
              </div>
              <div>
                <div className="font-medium">Tablet</div>
                <div className="text-muted-foreground">iPad & Android</div>
              </div>
              <div>
                <div className="font-medium">Desktop</div>
                <div className="text-muted-foreground">All Browsers</div>
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
      </div>
    )
  }

  const renderDataVizCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Meter Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5" />
              <CardTitle className="text-lg">Performance Score</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.87)}`}
                  className="text-green-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">87</div>
                  <div className="text-xs text-muted-foreground">Score</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="font-medium text-green-600">Fast</div>
                <div className="text-muted-foreground">Load Time</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-blue-600">Optimized</div>
                <div className="text-muted-foreground">Resources</div>
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

        {/* Mini Dashboard Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <CardTitle className="text-lg">Analytics Overview</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1.2K</div>
                <div className="text-xs text-muted-foreground">Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3.4%</div>
                <div className="text-xs text-muted-foreground">Conversion</div>
              </div>
            </div>
            <div className="h-16 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded flex items-end justify-between px-2 pb-2">
              {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                <div key={i} className="w-2 bg-primary rounded-t" style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Mon</span>
              <span>Sun</span>
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

        {/* Status Monitor Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">System Status</CardTitle>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600">Online</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-blue-500" />
                <span className="text-sm">API Server</span>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Healthy
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Security</span>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Secure
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">Performance</span>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Optimal
              </Badge>
            </div>
            <div className="pt-2 border-t">
              <div className="text-xs text-muted-foreground">Last updated: 2 minutes ago</div>
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
      </div>
    )
  }

  const renderSocialProofCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Avatar Cluster Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <CardTitle className="text-lg">Trusted by Teams</CardTitle>
            <CardDescription>Join 10,000+ users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex -space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Avatar key={i} className="border-2 border-white">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&text=U${i}`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
              <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
                +5K
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm font-medium ml-2">4.9</span>
            </div>
            <p className="text-sm text-muted-foreground">"Amazing product! Our team productivity increased by 40%"</p>
          </CardContent>
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit3 className="w-4 h-4" />
          </Button>
        </Card>

        {/* Live Activity Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <CardTitle className="text-lg">Live Activity</CardTitle>
            </div>
            <CardDescription>Real-time user actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=JS" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="text-sm">John just signed up</div>
                <div className="text-xs text-muted-foreground">2 seconds ago</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=MK" />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="text-sm">Maria completed setup</div>
                <div className="text-xs text-muted-foreground">1 minute ago</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32&text=AL" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="text-sm">Alex upgraded to Pro</div>
                <div className="text-xs text-muted-foreground">3 minutes ago</div>
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

        {/* Achievement Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">Award Winner</CardTitle>
                <CardDescription>Product of the Year 2024</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Best Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">User's Choice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Editor's Pick</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="text-xs text-muted-foreground">Recognized by TechCrunch, ProductHunt, and Gartner</div>
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
      </div>
    )
  }

  const renderProcessCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Timeline Process Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <CardTitle className="text-lg">Setup Process</CardTitle>
            <CardDescription>3 simple steps</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { step: 1, title: "Create Account", status: "completed" },
                { step: 2, title: "Configure Settings", status: "current" },
                { step: 3, title: "Start Using", status: "pending" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      item.status === "completed"
                        ? "bg-green-500 text-white"
                        : item.status === "current"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.status === "completed" ? <CheckCircle className="w-4 h-4" /> : item.step}
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm ${item.status === "current" ? "font-medium" : ""}`}>{item.title}</div>
                    {item.status === "current" && <div className="text-xs text-blue-600">In progress...</div>}
                  </div>
                </div>
              ))}
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

        {/* Workflow Automation Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <CardTitle className="text-lg">Auto Workflow</CardTitle>
            </div>
            <CardDescription>Saves 5 hours per week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                <Bell className="w-4 h-4 text-blue-500" />
                <span className="text-sm">New lead detected</span>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Send welcome email</span>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded">
                <Users className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Add to CRM</span>
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

        {/* Progress Journey Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <CardTitle className="text-lg">Your Journey</CardTitle>
            </div>
            <CardDescription>Level up your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Beginner</span>
                <span className="text-sm text-muted-foreground">Level 3</span>
              </div>
              <Progress value={65} className="h-2" />
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>Basics</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>Advanced</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Star className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>Expert</div>
                </div>
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
      </div>
    )
  }

  const renderContextualCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Location-Based Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <CardTitle className="text-lg">Global Presence</CardTitle>
            </div>
            <CardDescription>Available worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">🇺🇸 United States</span>
                <Badge variant="secondary">24/7</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">🇪🇺 Europe</span>
                <Badge variant="secondary">24/7</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">🇦🇺 Asia Pacific</span>
                <Badge variant="secondary">24/7</Badge>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <div className="text-sm font-medium text-green-800">99.9% Uptime Globally</div>
              <div className="text-xs text-green-600">Distributed across 15+ data centers</div>
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

        {/* Weather/Environment Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-orange-500" />
              <CardTitle className="text-lg">Smart Monitoring</CardTitle>
            </div>
            <CardDescription>Environmental awareness</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">72°F</div>
                <div className="text-xs text-muted-foreground">Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">45%</div>
                <div className="text-xs text-muted-foreground">Humidity</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Air Quality</span>
                <Badge variant="outline" className="text-green-600">
                  Good
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>UV Index</span>
                <Badge variant="outline" className="text-yellow-600">
                  Moderate
                </Badge>
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

        {/* Time-Based Card */}
        <Card className="group hover:shadow-lg transition-all duration-200 relative">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <CardTitle className="text-lg">Schedule Optimizer</CardTitle>
            </div>
            <CardDescription>Best time to engage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Peak Hours</span>
                <Badge variant="secondary">9AM - 11AM</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Optimal Days</span>
                <Badge variant="secondary">Tue - Thu</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Response Time</span>
                <Badge variant="secondary">&lt; 2 hours</Badge>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-blue-800">Next Optimal Window</div>
              <div className="text-xs text-blue-600">Tomorrow at 9:30 AM</div>
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
      </div>
    )
  }

  const renderContent = () => {
    switch (selectedCategory) {
      case "interactive":
        return renderInteractiveCards()
      case "demo":
        return renderDemoCards()
      case "data-viz":
        return renderDataVizCards()
      case "social-proof":
        return renderSocialProofCards()
      case "process":
        return renderProcessCards()
      case "contextual":
        return renderContextualCards()
      default:
        return renderInteractiveCards()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Innovative Feature Cards</h1>
              <p className="text-muted-foreground mt-2">Unique and engaging card designs beyond traditional layouts</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Export All
              </Button>
              <Button size="sm">
                <Code2 className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Selector */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardCategories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedCategory === category.id ? "ring-2 ring-primary shadow-lg" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Category Content */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{cardCategories.find((c) => c.id === selectedCategory)?.name}</h2>
              <p className="text-muted-foreground">
                {cardCategories.find((c) => c.id === selectedCategory)?.description}
              </p>
            </div>
            <Badge variant="outline" className="text-sm">
              3 examples
            </Badge>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
