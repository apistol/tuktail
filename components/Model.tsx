import {useGLTF} from "@react-three/drei";
import {useRef, useEffect} from "react";
import {Group} from "three";
import {gsap} from "gsap";

useGLTF.preload('/cocktail_martini.glb');

export default function Model() {
    const group = useRef<Group>(null);
    const {scene} = useGLTF("/cocktail_martini.glb");

useEffect(() => {
    if (group.current) {

        group.current.position.set(0, 0.1, 0); // Set initial position

        const timeline = gsap.timeline();
        timeline.to(group.current.position, {
            y: group.current.position.y - 0.2,
            duration: 3,
            z: 4.70,
            ease: "power1.inOut"
        }).to(group.current.rotation, {
            y: group.current.rotation.x + 10,
            duration: 2,
            ease: "power1.inOut"
        })
        //     .to(group.current.position, {
        //     x: group.current.position.x + 0.2,
        //     duration: 2,
        //     ease: "power1.inOut"
        // });
    }
}, []);

    return (
        <group ref={group}>
            <primitive object={scene}/>
        </group>
    );
}