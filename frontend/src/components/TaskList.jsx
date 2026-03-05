import { useRef, useEffect, useCallback } from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/taskContext";

export default function TaskList() {
    const { filteredTasks, loading } = useTasks();

    const trackRef   = useRef(null);
    const animRef    = useRef(null);
    const offsetRef  = useRef(0);
    const pausedRef  = useRef(false);
    const speedRef   = useRef(0.6); 
     const copies = filteredTasks.length > 0
    ? Math.ceil(3 / Math.max(filteredTasks.length, 1)) + 1: 0; // animate at least 3
    const displayList = Array.from({ length: copies }, () => filteredTasks).flat();
    
    const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track) { animRef.current = requestAnimationFrame(animate); return; }
    if (!pausedRef.current) {
      const firstCard = track.querySelector('.task-item');
      if (firstCard) {
        const cardWidth  = firstCard.offsetWidth + 15;
        const setWidth   = cardWidth * filteredTasks.length;
        offsetRef.current -= speedRef.current;
        if (setWidth > 0 && offsetRef.current <= -setWidth) {
          offsetRef.current += setWidth;
        }
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
    }
    animRef.current = requestAnimationFrame(animate);
  }, [filteredTasks.length]);

    useEffect(() => {
        offsetRef.current = 0;
        if (trackRef.current) trackRef.current.style.transform = 'translateX(0)';
        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, [animate]);

    const pause  = () => {
         pausedRef.current = true;
    };
    const resume = () => { 
        pausedRef.current = false;
    };

    if (loading) {
        return <div className="task-list">Loading...</div>;
    }
    if (filteredTasks.length === 0) {
        return <div className="task-list">The list is empty</div>;
    }

 return (
    <div
      className="tasklist-wrap"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
    >
      <div className="fade-left"  />
      <div className="fade-right" />
      <div className="tasklist-track" ref={trackRef}>
        {displayList.map((task, i) => (
          <TaskItem key={`${task.id}-copy${i}`} task={task} />
        ))}
      </div>
    </div>
  );
}
