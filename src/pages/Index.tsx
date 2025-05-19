
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Code, Compass, Layers } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-background -z-10"></div>
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 space-y-6 md:pr-10 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-text animate-fade-in">
                  Visualize Graph Algorithms With Ease
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl md:max-w-md animate-fade-in animation-delay-200">
                  An intuitive tool to understand and compare shortest path algorithms like Dijkstra's, 
                  Bellman-Ford, and Floyd-Warshall.
                </p>
                <div className="flex gap-4 pt-4 animate-fade-in animation-delay-400">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/visualizer" className="gap-2">
                      Try It Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="rounded-full">
                    <Link to="/learn">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full -z-10 animate-pulse"></div>
                  <Card className="glass-card rounded-xl overflow-hidden">
                    <CardContent className="p-3">
                      <img 
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80" 
                        alt="Graph visualization" 
                        className="rounded-lg w-full h-64 md:h-80 object-cover animate-fade-in"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Key Features</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Powerful tools to help you understand and visualize graph algorithms
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Compass className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Interactive Graph Editor</h3>
                  <p className="text-muted-foreground">
                    Add nodes and edges with custom weights. Modify your graph in real-time with an intuitive interface.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Layers className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Algorithm Visualization</h3>
                  <p className="text-muted-foreground">
                    Watch algorithms run step-by-step and see how they find the shortest paths in your graph.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Code className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Algorithm Comparison</h3>
                  <p className="text-muted-foreground">
                    Compare different algorithms side by side to understand their strengths, weaknesses, and performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/40 -z-10"></div>
          <div className="container text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Start Learning Graph Algorithms Today</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Whether you're a student, teacher, or just curious about algorithms, 
                our visualization tool helps make complex concepts simple.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/visualizer" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
