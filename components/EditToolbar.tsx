import { Button } from "./ui/button";
import { useEdit } from './EditContext';
import { Edit3, Save, Eye } from 'lucide-react';

export function EditToolbar() {
  const { isEditMode, toggleEditMode } = useEdit();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border border-border rounded-lg shadow-lg p-2">
        <Button
          onClick={toggleEditMode}
          variant={isEditMode ? "default" : "outline"}
          size="sm"
          className="flex items-center gap-2"
        >
          {isEditMode ? (
            <>
              <Eye className="w-4 h-4" />
              View Mode
            </>
          ) : (
            <>
              <Edit3 className="w-4 h-4" />
              Edit Mode
            </>
          )}
        </Button>
      </div>
      
      {isEditMode && (
        <div className="mt-2 text-xs text-muted-foreground bg-background/95 backdrop-blur p-2 rounded border">
          <p>Click any text to edit</p>
          <p>Press Enter to save (Cmd+Enter for multiline)</p>
          <p>Press Escape to cancel</p>
        </div>
      )}
    </div>
  );
}