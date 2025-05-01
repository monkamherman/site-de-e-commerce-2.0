
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ReviewFormProps {
  productId: number;
  onSuccess?: () => void;
}

const ReviewForm = ({ productId, onSuccess }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Erreur",
        description: "Veuillez attribuer une note au produit",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Mock API call - would be replaced with an actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Avis envoyé",
        description: "Merci pour votre avis !",
      });
      
      // Reset form
      setRating(0);
      setComment("");
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess();
      }
    }, 1000);
  };

  return (
    <div className="border rounded-md p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4">Laisser un avis</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <p className="mb-2">Votre note</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-8 h-8 cursor-pointer ${
                  (hoverRating || rating) >= star
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2">
            Commentaire
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Partagez votre expérience avec ce produit..."
            rows={4}
          />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Soumettre l'avis"}
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
