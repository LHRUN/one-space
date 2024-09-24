"use client"

import { useEffect, useState } from "react"
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import Tabs from "@/components/tabs"
import HomeComponent from '@/components/home'
import About from "@/components/about"
import Projects from "@/components/projects"
import Stack from "@/components/stack"
import Blogs from "@/components/blogs"
import StatueModel from '@/components/statueModel'
import PageFooter from "@/components/pageFooter"
import LoadingSVG from "@/assets/icon/loading.svg"

export type MESH = THREE.Group<THREE.Object3DEventMap>

export default function Home() {
  const [statueMesh, setStatueMesh] = useState<MESH | null>(null)
  useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('/statue.glb', (gltf) => {
      const model = gltf.scene;
      setStatueMesh(model)
    });
  }, [])

  return (
    <div id="app">
      {
        statueMesh ? (
          <>
            <div className="bg-repeat bg-[url('/background.png')] bg-[length:200px_200px] opacity-15 fixed top-0 left-0 w-full h-screen z-1"></div>
            <StatueModel statueMesh={statueMesh} />
            <div className="w-full h-screen relative z-[2] ">
              <Tabs />
              <HomeComponent />
              <About />
              <Projects />
              <Blogs />
              <Stack />
              <PageFooter />
            </div>
          </>
        ) : (
          <div className="w-full h-screen flex justify-center items-center opacity-60">
            <LoadingSVG className="w-16 h-16 animate-spin" />
          </div>
        )
      }
    </div>
  )
}
