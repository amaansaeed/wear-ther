import React from "react"
import styled from "styled-components"

//  styled components
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;

  & iframe {
    height: 100vh;
    width: 100vw;
  }
`

const Cinemagraph = props => {
  return (
    <Wrapper>
      <iframe
        title="day"
        frameborder="0"
        allow="autoplay"
        src="https://media.flixel.com/?data=eyJzbWFsbF9oZXZjX21wNCI6ICJmbGl4ZWwveXBhb3Fkcjd3dWRhOHJ2M2R2aWEuc21hbGxfaGV2Yy5tcDQiLCAid2F0ZXJtYXJrX3VybCI6IG51bGwsICJ3aWR0aCI6IDM4NDAsICJwaG9uZV9tcDQiOiAiZmxpeGVsL3lwYW9xZHI3d3VkYThydjNkdmlhLnBob25lLm1wNCIsICJoZF9tcDQiOiAiZmxpeGVsL3lwYW9xZHI3d3VkYThydjNkdmlhLmhkLm1wNCIsICJoZWlnaHQiOiAyMTYwLCAid2F0ZXJtYXJrX3Bvc2l0aW9uX3kiOiAiYm90dG9tIiwgImdpZiI6ICJmbGl4ZWwveXBhb3Fkcjd3dWRhOHJ2M2R2aWEuZ2lmIiwgIm1wNCI6ICJmbGl4ZWwveXBhb3Fkcjd3dWRhOHJ2M2R2aWEudGFibGV0Lm1wNCIsICJsaW5rIjogIiIsICJ3YXRlcm1hcmtfcG9zaXRpb25feCI6ICJyaWdodCIsICJwYXRoIjogImh0dHBzOi8vY2RuLmZsaXhlbC5jb20vIiwgIndhdGVybWFya19zY2FsZSI6IG51bGwsICJoZXZjX21wNCI6ICJmbGl4ZWwveXBhb3Fkcjd3dWRhOHJ2M2R2aWEuaGV2Yy5tcDQiLCAidGh1bWJuYWlsIjogImZsaXhlbC95cGFvcWRyN3d1ZGE4cnYzZHZpYS50aHVtYm5haWwuanBnIiwgInRhYmxldF9tcDQiOiAiZmxpeGVsL3lwYW9xZHI3d3VkYThydjNkdmlhLnRhYmxldC5tcDQifQ==&amp;hd=true"
      />
    </Wrapper>
  )
}

export default Cinemagraph
