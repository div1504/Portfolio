import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Upload, File, Download, Eye, Trash2, FileText, Code, Database, BarChart } from "lucide-react";

interface WorkFile {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadDate: string;
  category: 'research' | 'code' | 'data' | 'presentation';
  downloadUrl?: string;
}

export function WorkUpload() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  const [workFiles] = useState<WorkFile[]>([
    {
      id: '1',
      name: 'Customer_Churn_Analysis.pdf',
      size: '2.3 MB',
      type: 'PDF',
      uploadDate: '2025-01-08',
      category: 'research'
    },
    {
      id: '2',
      name: 'ML_Model_Pipeline.ipynb',
      size: '1.8 MB',
      type: 'Jupyter Notebook',
      uploadDate: '2025-01-07',
      category: 'code'
    },
    {
      id: '3',
      name: 'Sales_Forecast_Dashboard.py',
      size: '856 KB',
      type: 'Python',
      uploadDate: '2025-01-06',
      category: 'code'
    },
    {
      id: '4',
      name: 'Customer_Dataset_Cleaned.csv',
      size: '5.2 MB',
      type: 'CSV',
      uploadDate: '2025-01-05',
      category: 'data'
    },
    {
      id: '5',
      name: 'Q4_Analytics_Presentation.pptx',
      size: '12.1 MB',
      type: 'PowerPoint',
      uploadDate: '2025-01-04',
      category: 'presentation'
    }
  ]);

  const getIcon = (category: string) => {
    switch (category) {
      case 'research': return <FileText className="h-4 w-4" />;
      case 'code': return <Code className="h-4 w-4" />;
      case 'data': return <Database className="h-4 w-4" />;
      case 'presentation': return <BarChart className="h-4 w-4" />;
      default: return <File className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'research': return 'bg-blue-100 text-blue-800';
      case 'code': return 'bg-green-100 text-green-800';
      case 'data': return 'bg-purple-100 text-purple-800';
      case 'presentation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      setUploadProgress(0);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            alert(`Successfully uploaded ${files.length} file(s)!`);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const handleDownload = (file: WorkFile) => {
    // Simulate download
    alert(`Downloading ${file.name}...`);
  };

  const handlePreview = (file: WorkFile) => {
    // Simulate preview
    alert(`Opening preview for ${file.name}...`);
  };

  const handleDelete = (file: WorkFile) => {
    if (confirm(`Are you sure you want to delete ${file.name}?`)) {
      alert(`${file.name} has been deleted.`);
    }
  };

  return (
    <section id="work-upload" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Work Repository</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access my latest research papers, code repositories, datasets, and presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Work
                </CardTitle>
                <CardDescription>
                  Share your latest research, code, or data files
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div 
                  className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => document.getElementById('work-file-upload')?.click()}
                >
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, IPYNB, PY, CSV, XLSX, PPTX
                  </p>
                </div>
                
                <input
                  id="work-file-upload"
                  type="file"
                  multiple
                  accept=".pdf,.ipynb,.py,.csv,.xlsx,.pptx,.json,.sql,.md"
                  className="hidden"
                  onChange={handleFileUpload}
                />

                {isUploading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} />
                  </div>
                )}

                <div className="text-xs text-muted-foreground">
                  <p>Supported formats:</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Research: PDF, MD</li>
                    <li>• Code: PY, IPYNB, SQL</li>
                    <li>• Data: CSV, XLSX, JSON</li>
                    <li>• Presentations: PPTX</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* File List Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Work</CardTitle>
                <CardDescription>
                  Latest uploads and published work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="flex-shrink-0">
                          {getIcon(file.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm truncate">{file.name}</p>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${getCategoryColor(file.category)}`}
                            >
                              {file.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{file.size}</span>
                            <span>{file.type}</span>
                            <span>{file.uploadDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handlePreview(file)}
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownload(file)}
                          className="h-8 w-8 p-0"
                        >
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(file)}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}