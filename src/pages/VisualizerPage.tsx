
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GraphCanvas from "@/components/graph/GraphCanvas";
import GraphControls from "@/components/graph/GraphControls";
import AlgorithmControls from "@/components/graph/AlgorithmControls";
import GraphLegend from "@/components/graph/GraphLegend";
import { useGraphStore } from "@/store/graphStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const VisualizerPage = () => {
  // Load a small example graph if the graph is empty
  const { graph, loadExampleGraph } = useGraphStore();
  
  useEffect(() => {
    if (graph.nodes.length === 0) {
      loadExampleGraph('small');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 gradient-text">Graph Algorithm Visualizer</h1>
          <p className="text-muted-foreground">
            Create, modify, and visualize graph algorithms in real-time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle>Graph Controls</CardTitle>
                <CardDescription>Add nodes and edges to build your graph</CardDescription>
              </CardHeader>
              <CardContent>
                <GraphControls />
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle>Visualization</CardTitle>
                <CardDescription>Interactive graph visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] bg-graph-background rounded-md">
                  <GraphCanvas />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle>Algorithm Controls</CardTitle>
                <CardDescription>Choose an algorithm and watch it run step-by-step</CardDescription>
              </CardHeader>
              <CardContent>
                <AlgorithmControls />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle>Instructions</CardTitle>
                <CardDescription>How to use the visualizer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-medium text-base mb-2">Creating Your Graph</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Click <strong>Add Node</strong> and then click on the canvas to place nodes</li>
                      <li>Click <strong>Add Edge</strong>, click a source node, then a target node</li>
                      <li>Select a node and click <strong>Set as Source</strong> to set your starting point</li>
                      <li>Optionally set a target node to visualize the path to it</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium text-base mb-2">Running Algorithms</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Select an algorithm from the dropdown</li>
                      <li>Click <strong>Run Algorithm</strong> to start</li>
                      <li>Use the playback controls to watch the algorithm work step by step</li>
                      <li>Check the result panel to see the final distances and execution time</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle>Legend</CardTitle>
                <CardDescription>Graph visualization elements</CardDescription>
              </CardHeader>
              <CardContent>
                <GraphLegend />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisualizerPage;
