"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Grid3X3,
  Grid2X2,
  ImageIcon,
  Zap,
  List,
  ChevronLeft,
  ChevronRight,
  Star,
  Shield,
  Rocket,
  Heart,
  Copy,
  Edit3,
  Eye,
  Code,
  Palette,
  Settings,
} from "lucide-react"

const layouts = [
  {
    id: "3x2",
    name: "3x2 Grid",
    icon: Grid3X3,
    description: "6 items in a 3x2 grid layout",
    preview: "grid-cols-3 grid-rows-2",
  },
  {
    id: "2x2-image",
    name: "2x2 + Image",
    icon: Grid2X2,
    description: "4 items with hero image",
    preview: "grid-cols-2 with image",
  },
  {
    id: "zigzag",
    name: "Zigzag",
    icon: Zap,
    description: "Alternating left-right layout",
    preview: "alternating layout",
  },
  {
    id: "list",
    name: "List",
    icon: List,
    description: "Vertical list layout",
    preview: "vertical stack",
  },
  {
    id: "carousel",
    name: "Carousel",
    icon: ChevronRight,
    description: "Horizontal scrolling cards",
    preview: "horizontal scroll",
  },
]

const componentTypes = [
  {
    id: "card-icon-text",
    name: "Card + Icon + Text",
    description: "Card with icon, title, and description",
    components: ["Card", "Icon", "Typography"],
  },
  {
    id: "feature-card",
    name: "Feature Card",
    description: "Enhanced card with badge and CTA",
    components: ["Card", "Badge", "Button", "Icon"],
  },
  {
    id: "stat-card",
    name: "Stat Card",
    description: "Card displaying statistics",
    components: ["Card", "Typography", "Progress"],
  },
  {
    id: "testimonial",
    name: "Testimonial",
    description: "Customer testimonial card",
    components: ["Card", "Avatar", "Rating", "Typography"],
  },
]

const sampleFeatures = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "High-quality materials and craftsmanship in every product we deliver.",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Your data and transactions are protected with enterprise-grade security.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Lightning-fast shipping and delivery to your doorstep worldwide.",
  },
  {
    icon: Heart,
    title: "Customer Love",
    description: "Loved by thousands of customers with 5-star reviews and testimonials.",
  },
]

export default function FeatureGridBuilder() {
  const [selectedLayout, setSelectedLayout] = useState("3x2")
  const [selectedComponent, setSelectedComponent] = useState("card-icon-text")
  const [editingItem, setEditingItem] = useState(null)
  const [activeTab, setActiveTab] = useState("layouts")

  const renderLayoutPreview = (layoutId: string) => {
    switch (layoutId) {
      case "3x2":
        return (
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <Star className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <div className="text-xs text-gray-500">Feature {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        )
      case "2x2-image":
        return (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="aspect-video bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Star className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                    <div className="text-xs text-gray-500">Feature {i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case "zigzag":
        return (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`flex gap-4 ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
                <div className="flex-1 bg-white rounded border-2 border-dashed border-gray-300 p-3">
                  <Star className="w-6 h-6 mb-2 text-gray-400" />
                  <div className="text-xs text-gray-500">Feature {i + 1}</div>
                </div>
                <div className="w-20 bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        )
      case "list":
        return (
          <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-3 bg-white rounded border-2 border-dashed border-gray-300 p-3">
                <Star className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">Feature {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        )
      case "carousel":
        return (
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-32 aspect-square bg-white rounded border-2 border-dashed border-gray-300 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Star className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                    <div className="text-xs text-gray-500">Item {i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-3">
              <ChevronLeft className="w-6 h-6 text-gray-400" />
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const renderActualPreview = () => {
    if (selectedLayout === "3x2") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleFeatures.concat(sampleFeatures.slice(0, 2)).map((feature, i) => (
            <Card key={i} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => setEditingItem(i)}
              >
                <Edit3 className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      )
    }

    return (
      <div className="text-center py-12 text-gray-500">
        <Eye className="w-12 h-12 mx-auto mb-4" />
        <p>Preview will appear here based on selected layout and components</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Feature Grid Builder</h1>
              <p className="text-muted-foreground">Create beautiful feature grids for your website</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Configuration */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="layouts">Layouts</TabsTrigger>
                    <TabsTrigger value="components">Components</TabsTrigger>
                    <TabsTrigger value="style">Style</TabsTrigger>
                  </TabsList>

                  <TabsContent value="layouts" className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Choose Layout</Label>
                      <div className="grid gap-3 mt-2">
                        {layouts.map((layout) => (
                          <Card
                            key={layout.id}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedLayout === layout.id ? "ring-2 ring-primary" : ""
                            }`}
                            onClick={() => setSelectedLayout(layout.id)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <layout.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-sm">{layout.name}</h4>
                                  <p className="text-xs text-muted-foreground mt-1">{layout.description}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="components" className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Component Type</Label>
                      <div className="grid gap-3 mt-2">
                        {componentTypes.map((component) => (
                          <Card
                            key={component.id}
                            className={`cursor-pointer transition-all hover:shadow-md ${
                              selectedComponent === component.id ? "ring-2 ring-primary" : ""
                            }`}
                            onClick={() => setSelectedComponent(component.id)}
                          >
                            <CardContent className="p-4">
                              <h4 className="font-medium text-sm">{component.name}</h4>
                              <p className="text-xs text-muted-foreground mt-1">{component.description}</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {component.components.map((comp) => (
                                  <Badge key={comp} variant="secondary" className="text-xs">
                                    {comp}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="style" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="spacing">Spacing</Label>
                        <Select defaultValue="md">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sm">Small</SelectItem>
                            <SelectItem value="md">Medium</SelectItem>
                            <SelectItem value="lg">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="theme">Color Theme</Label>
                        <Select defaultValue="default">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="default">Default</SelectItem>
                            <SelectItem value="blue">Blue</SelectItem>
                            <SelectItem value="green">Green</SelectItem>
                            <SelectItem value="purple">Purple</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Layout Preview */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-sm">Layout Preview</CardTitle>
              </CardHeader>
              <CardContent>{renderLayoutPreview(selectedLayout)}</CardContent>
            </Card>
          </div>

          {/* Main Content - Preview */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Live Preview</CardTitle>
                    <CardDescription>
                      {layouts.find((l) => l.id === selectedLayout)?.name} with{" "}
                      {componentTypes.find((c) => c.id === selectedComponent)?.name}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Code className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <Palette className="w-4 h-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="border rounded-lg p-6 bg-white min-h-[500px]">{renderActualPreview()}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>Edit Feature</CardTitle>
              <CardDescription>Customize the content and appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" defaultValue={sampleFeatures[editingItem % sampleFeatures.length]?.title} />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue={sampleFeatures[editingItem % sampleFeatures.length]?.description}
                />
              </div>
              <div>
                <Label htmlFor="icon">Icon</Label>
                <Select defaultValue="star">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="star">Star</SelectItem>
                    <SelectItem value="shield">Shield</SelectItem>
                    <SelectItem value="rocket">Rocket</SelectItem>
                    <SelectItem value="heart">Heart</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <div className="flex gap-2 p-6 pt-0">
              <Button onClick={() => setEditingItem(null)} className="flex-1">
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setEditingItem(null)}>
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
